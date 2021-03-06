var endavaopenadmin = angular.module('endavaopenadmin', ['ng-admin']);
endavaopenadmin.config(['NgAdminConfigurationProvider', function(nga) {
	var app = nga.application('Endava Open')
		.baseApiUrl('');

	var player = nga.entity('player')
		.label('Players')
		.identifier(nga.field('id'));
	var tournament = nga.entity('tournament')
		.label('Tournaments')
		.identifier(nga.field('id'));
	var round = nga.entity('round')
		.label('Rounds')
		.identifier(nga.field('id'));
	var match = nga.entity('match')
		.label('Matches (singles)')
		.identifier(nga.field('id'));
	var doublematch = nga.entity('doublematch')
		.label('Matches (doubles)')
		.identifier(nga.field('id'));
	//----------------------------------------------PLAYER
	app.addEntity(player);
	player.listView()
		.title('Players')
		.fields([
			nga.field('fullName')
				.label('Name'),
			nga.field('deliveryUnit')
				.label('Work')
				.map(function (value, entry) {
					return (entry.jobTitle || ' ') + ' (' + (entry.deliveryUnit || ' ') + ')';
				}),
      nga.field('active', 'boolean')
        .label('Active'),
			nga.field('createdAt', 'datetime')
				.label('Created On')
		])
		.listActions(['show', 'edit', 'delete']);
	player.creationView()
		.title('New Player')
		.fields([
			nga.field('fullName').label('Name'),
			nga.field('photoUri').label('Photo URL (deprecated)'),
			nga.field('hqPhotoUri').label('HQ Photo URL'),
			nga.field('deliveryUnit').label('Delivery Unit'),
			nga.field('jobTitle').label('Job Title'),
			nga.field('description', 'wysiwyg'),
      nga.field('active', 'boolean').label('Active this year'),
			nga.field('seedNumber')
		]);
	player.editionView()
    .title('<img src="{{ entry.values.hqPhotoUri }}" width="50" style="vertical-align: text-bottom"/> {{ entry.values.fullName }}\'s details')
		.fields([
      nga.field('fullName').label('Full Name'),
      nga.field('photoUri').label('Photo URL (deprecated)'),
      nga.field('hqPhotoUri').label('HQ Photo URL'),
      nga.field('deliveryUnit').label('Delivery Unit'),
      nga.field('jobTitle').label('Job Title'),
			nga.field('description', 'wysiwyg'),
      nga.field('active', 'boolean').label('Active this year'),
			nga.field('seedNumber')
		]);
	player.showView()
    .title('<img src="{{ entry.values.hqPhotoUri }}" width="50" style="vertical-align: text-bottom"/> {{ entry.values.fullName }}\'s details')
		.fields([
			nga.field('id'),
      nga.field('fullName').label('Full Name'),
      nga.field('photoUri').label('Photo URL (deprecated)'),
      nga.field('hqPhotoUri').label('HQ Photo URL'),
      nga.field('deliveryUnit').label('Delivery Unit'),
      nga.field('jobTitle').label('Job Title'),
			nga.field('description', 'wysiwyg'),
      nga.field('active', 'boolean').label('Active this year'),
			nga.field('seedNumber'),
			nga.field('createdAt', 'datetime'),
			nga.field('updatedAt', 'datetime')
		]);
	//----------------------------------------------TOURNAMENT

	app.addEntity(tournament);
	tournament.listView()
		.title('Tournaments')
		.fields([
			nga.field('name'),
      nga.field('year'),
			nga.field('started', 'boolean'),
			nga.field('indoor', 'boolean')
		])
		.listActions(['show', 'edit', 'delete']);
	tournament.creationView()
		.title('New Tournament')
		.fields([
			nga.field('name'),
			nga.field('year'),
			nga.field('started', 'boolean'),
			nga.field('indoor', 'boolean')
		]);
	tournament.editionView()
		.title('Edit Tournament')
		.fields([
			nga.field('name'),
      nga.field('year'),
			nga.field('started', 'boolean'),
			nga.field('indoor', 'boolean')
		]);
	tournament.showView()
		.title('Tournament Details')
		.fields([
      nga.field('id'),
			nga.field('name'),
      nga.field('year'),
			nga.field('started', 'boolean'),
			nga.field('indoor', 'boolean')
		]);
	//----------------------------------------------ROUND

	app.addEntity(round);
	round.listView()
		.title('Rounds')
		.fields([
			nga.field('id'),
			nga.field('name'),
			nga.field('day'),
			nga.field('precedence'),
			nga.field('tournament')
				.map(function truncate(value, entry) {
					return value.name + '-' + value.year;
				})
		])
		.sortField('precedence')
		.listActions(['show', 'edit', 'delete']);
	round.creationView()
		.title('New Round')
		.fields([
			nga.field('name'),
			nga.field('day', 'datetime')
				.label('Day (yyyy-MM-dd)')
				.format('yyyy-MM-dd')
				.map(function (value, entry) {
					if(entry.day && entry.time) {
						entry.day = entry.day + ' ' + entry.time;
						entry.time = undefined;
					}

					return entry.day;
				}),
			nga.field('time')
				.label('Time (HH:mm)'),
			nga.field('precedence'),
			nga.field('tournament', 'reference')
				.targetEntity(tournament)
				.targetField(nga.field('name')
          .map(function(value, entry) { return entry.name + '-' + entry.year;})
        )
		]);
	round.editionView()
		.title('Edit Round')
		.fields([
			nga.field('name'),
			nga.field('day')
				.label('Day (yyyy-MM-dd HH:mm)'),
			nga.field('precedence'),
			nga.field('tournament')
				.map(function truncate(value, entry) {
          return value.name + '-' + value.year;
				})
				.editable(false)
		]);
	round.showView()
		.title('Round Details')
		.fields([
			nga.field('id'),
			nga.field('name'),
			nga.field('day')
				.label('Day (yyyy-MM-dd HH:mm)'),
			nga.field('precedence'),
			nga.field('tournament')
				.map(function truncate(value, entry) {
          return value.name + '-' + value.year;
				})
		]);
	//----------------------------------------------MATCH

	app.addEntity(match);
	match.listView()
		.title('Matches')
		.fields([
			nga.field('round')
				.map(function truncate(value, entry) {
					return value.name;
				}),
			nga.field('player1')
				.label('Title')
				.map(function (value, entry) {
					var title = entry.player1.fullName;
					if (entry.set1) {
						title += ' (' + entry.set1 + ', ' + entry.set2 + ', ' + entry.set3 + ') ';
					}
					else {
						title += ' vs. ';
					}

					title += entry.player2.fullName;
					return title;
				})
				.isDetailLink(true),
			nga.field('date')
				.map(function (value, entry) {
					if(value) {
						return new Date(value).toLocaleString();
					}
				}),
			nga.field('location')
		])
		.listActions(['edit', 'delete']);
	match.creationView()
		.title('New Match')
		.fields([
			nga.field('player1', 'reference')
				.label('Player A')
				.targetEntity(player)
        .perPage(100)
        .sortField('fullName')
        .sortDir('ASC')
				.targetField(nga.field('fullName')),
			nga.field('player2', 'reference')
				.label('Player B')
				.targetEntity(player)
        .perPage(100)
        .sortField('fullName')
        .sortDir('ASC')
				.targetField(nga.field('fullName')),
			nga.field('round', 'reference')
				.targetEntity(round)
				.targetField(nga.field('name')
          .map(function(value, entry) {
            return entry.name + ' ' + entry.tournament.name + '-' + entry.tournament.year;
          })
        ),
			nga.field('date', 'datetime')
				.label('Play On (yyyy-MM-dd)')
				.format('yyyy-MM-dd')
				.map(function (value, entry) {
					if(entry.date && entry.time) {
						entry.date = entry.date + 'T' + entry.time + '+03:00';
						entry.time = undefined;
					}

					return entry.date;
				}),
			nga.field('time')
				.label('Time (HH:mm)'),
			nga.field('location', 'choice')
				.choices([
				  { value: 'Niagara Courts', label: 'Niagara Courts' },
				  { value: 'State University', label: 'State University' },
          { value: 'Tennis Club Acvila Court 1', label: 'Tennis Club Acvila Court 1' },
          { value: 'Tennis Club Acvila Court 2', label: 'Tennis Club Acvila Court 2' },
          { value: 'Tennis Club Acvila Court 3', label: 'Tennis Club Acvila Court 3' },
          { value: 'Tennis Club Acvila Court 4', label: 'Tennis Club Acvila Court 4' }

				])
		]);
	match.editionView()
		.title('Edit Match')
		.fields([
        nga.field('round')
          .map(function truncate(value, entry) {
            return value.name;
          })
				.editable(false),
			nga.field('createdAt')
				.label('Title')
				.map(function truncate(value, entry) {
					if(entry && entry.player1 && entry.player2)
						return entry.player1.fullName + ' vs. ' + entry.player2.fullName;
				})
				.editable(false),
			nga.field('date', 'string')
				.label('Play On (yyyy-MM-dd HH:mm)')
				.map(function truncate(value, entry) {
					if(value) {
						return new Date(value).toString();
					}
					return value;
				}),
			nga.field('set1'),
			nga.field('set2'),
			nga.field('set3'),
			nga.field('summary'),
			nga.field('location', 'choice')
				.choices([
				  { value: 'Niagara Courts', label: 'Niagara Courts' },
				  { value: 'State University', label: 'State University' },
          { value: 'Tennis Club Acvila Court 1', label: 'Tennis Club Acvila Court 1' },
          { value: 'Tennis Club Acvila Court 2', label: 'Tennis Club Acvila Court 2' },
          { value: 'Tennis Club Acvila Court 3', label: 'Tennis Club Acvila Court 3' },
          { value: 'Tennis Club Acvila Court 4', label: 'Tennis Club Acvila Court 4' }
				])
		]);
	//----------------------------------------------DOUBLE_MATCH

	app.addEntity(doublematch);
	doublematch.listView()
		.title('DoubleMatches')
		.fields([
			nga.field('round')
				.map(function truncate(value, entry) {
					return value.name;
				}),
			nga.field('player11')
				.label('Title')
				.map(function truncate(value, entry) {
					var title = entry.player11.fullName + ' & ' + entry.player12.fullName;
					if (entry.set1) {
						title += ' (' + entry.set1 + ', ' + entry.set2 + ', ' + entry.set3 + ') ';
					}
					else {
						title += ' vs. ';
					}

					title += entry.player21.fullName + ' & ' + entry.player22.fullName;
					return title;
				})
				.isDetailLink(true),
			nga.field('date')
				.map(function (value, entry) {
          if (value) {
            return new Date(value).toLocaleString();
          }
          return value;
				}),
			nga.field('location')
		])
		.listActions(['edit', 'delete']);
	doublematch.creationView()
		.title('New DoubleMatch')
		.fields([
			nga.field('player11', 'reference')
				.label('Player A 1')
				.targetEntity(player)
        .perPage(100)
        .sortField('fullName')
        .sortDir('ASC')
				.targetField(nga.field('fullName')),
			nga.field('player12', 'reference')
				.label('Player A 2')
				.targetEntity(player)
        .perPage(100)
        .sortField('fullName')
        .sortDir('ASC')
				.targetField(nga.field('fullName')),
			nga.field('player21', 'reference')
				.label('Player B 1')
				.targetEntity(player)
        .perPage(100)
        .sortField('fullName')
        .sortDir('ASC')
				.targetField(nga.field('fullName')),
			nga.field('player22', 'reference')
				.label('Player B 2')
				.targetEntity(player)
        .perPage(100)
        .sortField('fullName')
        .sortDir('ASC')
				.targetField(nga.field('fullName')),
      nga.field('round', 'reference')
        .targetEntity(round)
        .targetField(nga.field('name')
          .map(function(value, entry) {
            return entry.name + ' ' + entry.tournament.name + '-' + entry.tournament.year;
          })
        ),
			nga.field('date', 'datetime')
				.label('Play On (yyyy-MM-dd)')
				.format('yyyy-MM-dd')
        .map(function (value, entry) {
          if(entry.date && entry.time) {
            entry.date = entry.date + 'T' + entry.time + '+03:00';
            entry.time = undefined;
          }

          return entry.date;
        }),
			nga.field('time')
				.label('Time (HH:mm)'),
			nga.field('location', 'choice')
				.choices([
				  { value: 'Niagara Courts', label: 'Niagara Courts' },
				  { value: 'State University', label: 'State University' },
          { value: 'Tennis Club Acvila Court 1', label: 'Tennis Club Acvila Court 1' },
          { value: 'Tennis Club Acvila Court 2', label: 'Tennis Club Acvila Court 2' },
          { value: 'Tennis Club Acvila Court 3', label: 'Tennis Club Acvila Court 3' },
          { value: 'Tennis Club Acvila Court 4', label: 'Tennis Club Acvila Court 4' }
				])
		]);
	doublematch.editionView()
		.title('Edit DoubleMatch')
		.fields([
			nga.field('round')
				.map(function truncate(value, entry) {
					return value.name;
				})
				.editable(false),
			nga.field('player11')
				.label('Title')
				.map(function truncate(value, entry) {
					if(entry.player11 && entry.player12 && entry.player21 && entry.player22) {
						var title = entry.player11.fullName + ' & ' + entry.player12.fullName;
						if (entry.set1) {
							title += ' (' + entry.set1 + ', ' + entry.set2 + ', ' + entry.set3 + ') ';
						}
						else {
							title += ' vs. ';
						}

						title += entry.player21.fullName + ' & ' + entry.player22.fullName;
						return title;
					}
				})
				.editable(false),
			nga.field('date', 'string')
				.label('Play On (yyyy-MM-dd HH:mm)')
				.map(function truncate(value, entry) {
          if(value) {
            return new Date(value).toString();
          }
          return value;
				}),
			nga.field('set1'),
			nga.field('set2'),
			nga.field('set3'),
			nga.field('summary'),
			nga.field('location', 'choice')
				.choices([
				  { value: 'Niagara Courts', label: 'Niagara Courts' },
				  { value: 'State University', label: 'State University' },
          { value: 'Tennis Club Acvila Court 1', label: 'Tennis Club Acvila Court 1' },
          { value: 'Tennis Club Acvila Court 2', label: 'Tennis Club Acvila Court 2' },
          { value: 'Tennis Club Acvila Court 3', label: 'Tennis Club Acvila Court 3' },
          { value: 'Tennis Club Acvila Court 4', label: 'Tennis Club Acvila Court 4' }
				])
		]);

  var customHeaderTemplate =
    '<div class="navbar-header">' +
    '<span class="icon-bar"></span>' +
    '<span class="icon-bar"></span>' +
    '<span class="icon-bar"></span>' +
    '</button>' +
    '<a class="navbar-brand" href="#" ng-click="appController.displayHome()">Endava Open Admin Panel</a>' +
    '</div>' +
    '<p class="navbar-text navbar-right hidden-xs">' +
    '</p>';

  app.header(customHeaderTemplate);

	nga.configure(app);
}]);

endavaopenadmin.config(["RestangularProvider", function(rp) {
	rp.addFullRequestInterceptor(function(element, operation, what, url, headers, params, httpConfig) {
		if (operation == 'getList') {
			params.skip = (params._page - 1) * params._perPage;
			params.limit = params._perPage;
			params.sort = params._sortField + " " + params._sortDir;
			delete params._page;
			delete params._perPage;
			delete params._sortDir;
			delete params._sortField;
		}

    headers['Cache-Control'] = 'no-cache';

		return { params: params, headers: headers };
	});
  rp.addResponseInterceptor(function(data, operation, what, url, response) {
    if (operation == "getList") {
      var contentRange = response.headers('Content-Range');
      response.totalCount = contentRange.split('/')[1];
    }
    return data;
  });
}]);
