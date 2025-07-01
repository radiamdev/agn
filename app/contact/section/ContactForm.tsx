'use client'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Input from '@/app/components/common/Input'
import TextArea from '@/app/components/common/TextArea'
import Button from '@/app/components/common/Button'
import { toast } from 'react-toastify'
import { sendMail } from '@/lib/api/contact'
import { contactFormSchema } from '@/lib/validator'

const ContactForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                subject: '',
                message: '',
                honeypot: '',
            }}
            validationSchema={contactFormSchema}
            onSubmit={async (values, { resetForm }) => {
                if (values.honeypot) return
                try {
                    await sendMail(values).send()
                    toast.success('Message envoyé avec succès !')
                    resetForm()
                } catch (error) {
                    toast.error('Erreur lors de l’envoi')
                }
            }}
        >
            {({
                values,
                handleChange,
                handleBlur,
                touched,
                errors,
                isSubmitting,
            }) => (
                <Form className="flex flex-col gap-5">
                    <Input
                        name="name"
                        placeholder="Nom"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched.name}
                        error={errors.name}
                    />
                    <Input
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched.email}
                        error={errors.email}
                    />
                    <Input
                        name="subject"
                        placeholder="Objet"
                        value={values.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched.subject}
                        error={errors.subject}
                    />
                    <TextArea
                        name="message"
                        placeholder="Message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched.message}
                        error={errors.message}
                    />

                    {/* Champ anti-bot caché */}
                    <input
                        type="text"
                        name="honeypot"
                        value={values.honeypot}
                        onChange={handleChange}
                        className="hidden"
                    />

                    <Button
                        type="submit"
                        variant="primary"
                        label={isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                        className="w-fit"
                    />
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm
