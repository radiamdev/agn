import * as Yup from 'yup'

export const contactFormSchema = Yup.object({
  name: Yup.string().required('Le nom est requis'),
  email: Yup.string()
    .email('Email invalide')
    .required("L'email est requis"),
  subject: Yup.string().required('Le sujet est requis'),
  message: Yup.string().required('Le message est requis'),
  honeypot: Yup.string().max(0), // Pour bloquer les bots
})
