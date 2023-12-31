
module.exports = (sequelize, DataTypes) => {
    const alias = 'Producto';
  
    const cols = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Categoria',
          key: 'id'
        }
      },
      id_color: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Color',
          key: 'id'
        }
      },
        id_material: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Material',
            key: 'id'  
      }
    },
      imagen: {
        type: DataTypes.STRING, 
        allowNull: false,
      },
      activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true, 
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
    };
  
    const config = {
      tableName: 'productos',
      timestamps: false
    };
  
    const Producto = sequelize.define(alias, cols, config);
  
    Producto.associate = models => {
      Producto.belongsTo(models.Usuario, {
        as: 'usuario',
        foreignKey: 'usuario_id'
      });
      Producto.belongsTo(models.Categoria, {
        as: 'categoria',
         foreignKey: 'id_categoria' 
       });
      Producto.belongsTo(models.Color, {
        as: 'color',
         foreignKey: 'id_color' 
       });
    };


  
    return Producto;
  };
  

