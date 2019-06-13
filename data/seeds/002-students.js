
exports.seed = function(knex, Promise) {
      return knex('students').insert([
        {name: 'Shannon'},
        {name: 'Preston'},
        {name: 'CJ'}
      ]);
};
