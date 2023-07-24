import * as Yup from 'yup';
const emailRegex = new RegExp(`^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$`);
export const validate = Yup.object({
    first_name: Yup.string()
        .min(3, 'Adınız 3 simvoldan ibarət olmalıdır')
        .max(20, '20 və ya daha az simvol olmalıdır')
        .required('Ad sahəsi tələb olunur'),
    last_name: Yup.string()
        .min(3, 'Soyadınız 3 simvoldan ibarət olmalıdır')
        .max(20, '20 və ya daha az simvol olmalıdır')
        .required('Soyad sahəsi tələb olunur'),
    email: Yup.string().trim("boş qoymayın").required("E-poçt tələb olunur").email("Səhv e-mail").matches(emailRegex, "Səhv e-mail"),
    whycontactus: Yup.string().min(10, "Ən azı 10 cümlə olmalıdır").required("Mesaj sahəsi tələb olunur"),
    phone_number: Yup.number()
        .typeError("Bu  düzgün telefon nömrəsinə bənzəmir")
        .positive("Telefon nömrəsi mənfi ilə başlaya bilməz")
        .integer("Telefon nömrəsinə ondalık nöqtə daxil ola bilməz")
        .min(8)
        .required('Telefon nömrəsi tələb olunur'),
})