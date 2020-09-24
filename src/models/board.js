module.exports = (sequelize, DataTypes) => {
    return sequelize.define('boards', {
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      contents: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      writer: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('now()'),
      }
    }, {
      //time stamp off
      timestamps: false,
    });
  };
  