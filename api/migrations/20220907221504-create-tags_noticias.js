'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Tags_Noticias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      noticiaId: {
        type: Sequelize.INTEGER,
        references: { model: 'Noticias', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false
      },
      tagId: {
        type: Sequelize.INTEGER,
        references: { model: 'Tags', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Tags_Noticias');
  }
};
