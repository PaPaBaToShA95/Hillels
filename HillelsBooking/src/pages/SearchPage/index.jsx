import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";

const SearchPage = () => {
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const params = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    navigate(`/hotels?${params.toString()}`);
  };

  return (
    <section className="min-h-[77vh]">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">
        Знайдіть готель який підійте саме Вам!
      </h2>

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <Field name="location">
              {({ input }) => (
                <Input type="text" placeholder="Місто" {...input} />
              )}
            </Field>

            <div className="flex gap-4">
              <Field name="checkIn">
                {({ input }) => <Input type="date" {...input} />}
              </Field>
              <Field name="checkOut">
                {({ input }) => <Input type="date" {...input} />}
              </Field>
            </div>

            <Field name="guests">
              {({ input }) => (
                <Input
                  type="number"
                  placeholder="Кількість гостей"
                  {...input}
                />
              )}
            </Field>

            <div className="flex gap-4">
              <Field name="priceFrom">
                {({ input }) => (
                  <Input type="number" placeholder="Ціна від" {...input} />
                )}
              </Field>
              <Field name="priceTo">
                {({ input }) => (
                  <Input type="number" placeholder="Ціна до" {...input} />
                )}
              </Field>
            </div>

            <Button label="Пошук" type="submit" />
          </form>
        )}
      />
    </section>
  );
};

export default SearchPage;
