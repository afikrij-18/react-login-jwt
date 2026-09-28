import { DataTypes } from "sequelize";
import db from "../config/database.js";
import User from "./User.js";

const Profile = db.define(
  "Profile",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    pendidikan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    hobi: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    kontak: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    tableName: "profiles", // Mengatur nama tabel fisik secara eksplisit menjadi jamak & huruf kecil
    timestamps: true,
  },
);

// Menghubungkan relasi One-to-One dengan tabel Users
User.hasOne(Profile, { foreignKey: "userId", onDelete: "CASCADE" });
Profile.belongsTo(User, { foreignKey: "userId" });

export default Profile;

// (async () => {
//   await db.sync({ alter : true });
// })();
