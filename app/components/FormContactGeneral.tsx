type FormProps = {
  title?: string
  description: string
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const FormContactGeneral = ({
  title = 'Contact Us',
  description,
  handleSubmit,
}: FormProps) => {
  return (
    <div className="max-w-prose">
      <h1 className="font-heading my-2 ml-2 text-4xl font-semibold">{title}</h1>
      <p className="ml-2">{description}</p>
      <form className="mt-3 flex flex-col" onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="name"
          placeholder="Name"
          className="m-2 p-2"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="m-2 p-2"
        />
        <textarea
          required
          name="message"
          placeholder="Tell us what you think..."
          className="m-2 p-2"
        ></textarea>
        <button
          type="submit"
          value="submit"
          className="m-2 bg-blue-800 p-2 font-semibold text-white"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default FormContactGeneral