import Profile from "../models/Profile.js";
import User from "../models/User.js";

// 1. Mengambil data profil user yang sedang login beserta relasinya
export const getProfile = async (req, res) => {
  try {
    // req.user.id didapatkan dari middleware verifikasi token JWT
    const userId = req.user.id;

    const user = await User.findByPk(userId, {
      attributes: ["id", "nama", "email"],
      include: [
        {
          model: Profile,
          attributes: ["bio", "pendidikan", "hobi", "kontak"],
        },
      ],
    });
    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }
    return res.status(200).json({
      message: "Berhasil mengambil data profil",
      data: user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server " });
  }
};

// Membuat atau perubahan (Upsert) data profil user
export const upsertProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { bio, pendidikan, hobi, kontak } = req.body;

    let profile = await Profile.findOne({ where: { userId } });

    // Jika sudah ada, lakukan update
    if (profile) {
      profile.bio = bio;
      profile.pendidikan = pendidikan;
      profile.hobi = hobi;
      profile.kontak = kontak;
      await profile.save();

      return res.status(200).json({
        message: "Profil berhasil diperbarui",
        data: profile,
      });
    } else {
      // Jika belum ada, buat profil baru
      profile = await Profile.create({
        userId,
        bio,
        pendidikan,
        hobi,
        kontak,
      });

      return res.status(201).json({
        message: "Profil berhasil dibuat",
        data: profile,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};
