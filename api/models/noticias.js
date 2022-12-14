'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Noticias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Noticias.belongsTo(models.Fontes, {foreignKey: 'fonteId'})
      Noticias.belongsToMany(models.Tags, {through: 'Tags_Noticias', as: 'tags', foreignKey: 'noticiaId'})
    }
  }
  Noticias.init({
    titulo: DataTypes.STRING,
    resumo: DataTypes.STRING,
    urlNoticia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Noticias',
    paranoid: true
  });
  return Noticias;
};