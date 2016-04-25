var FB = require('fb');
//fb = new FB.Facebook({
//  appId:          '1408695579387797',
//  appSecret:      '96307b894ee342e222ed617d30aa95fa'//,
//  //redirectUri:    'localhost:1338/fb/login/callback'
//});


module.exports = {

  pagefeed: function (req, res) {
    res.json(FB.api('endava/feed?fields=full_picture,message,link', function (res) {
      if (!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
      }
      console.log(res.id);
      console.log(res.name);
    }));
  },

  loginCallback: function(req, res) {
    var code            = req.query.code;

    if(req.query.error) {
      // user might have disallowed the app
      return res.send('login-error ' + req.query.error_description);
    } else if(!code) {
      return res.redirect('/');
    }

    Step(
    function exchangeCodeForAccessToken() {
      FB.napi('oauth/access_token', {
        client_id:      FB.options('appId'),
        client_secret:  FB.options('appSecret'),
        redirect_uri:   FB.options('redirectUri'),
        code:           code
      }, this);
    },
    function extendAccessToken(err, result) {
      if(err) throw(err);
      FB.napi('oauth/access_token', {
        client_id:          FB.options('appId'),
        client_secret:      FB.options('appSecret'),
        grant_type:         'fb_exchange_token',
        fb_exchange_token:  result.access_token
      }, this);
    },
    function (err, result) {
      if(err) return next(err);

      req.session.access_token    = result.access_token;
      req.session.expires         = result.expires || 0;

      if(req.query.state) {
        var parameters              = JSON.parse(req.query.state);
        parameters.access_token     = req.session.access_token;

        console.log(parameters);

      } else {
        return res.redirect('/');
      }
    });
  }
};

