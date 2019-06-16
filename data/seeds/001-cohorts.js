
exports.seed = function(knex, Promise) {
      return knex('cohorts').insert([
        {name: 'Web19'},
        {name: 'Web20'},
        {name: 'Web21'}
      ]);
    };
