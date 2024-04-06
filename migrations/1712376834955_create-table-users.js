exports.up = (pgm) => {
  pgm.createTable('users', {
    id: {
      primaryKey: true,
      type: 'SERIAL',
    },
    name: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('users');
};
