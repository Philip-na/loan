import { useForm } from "react-hook-form";
import CustomModal from "../modal/CustomModal";
import FormInput from "../ui/FormInput";
import { useMutation } from "@tanstack/react-query";
import { createLoan } from "../../api/Api";

const durationOptions = [
  { value: "6", label: "6 months" },
  { value: "12", label: "12 months" },
  { value: "24", label: "24 months" },
  { value: "36", label: "36 months" },
];

const ApplyForm = ({ isOpen, onClose }) => {

//   {
//     "name": "",
//     "email": "",
//     "phone": "",
//     "amount": null,
//     "duration_months": null,
//     "reason": "",
//     "user": null,
//     "status": null,
//     "approved_date": null
// }

  const user = JSON.parse(localStorage.getItem("user")) || null;

  const defaultValues = {
    name: user ? user.user : "",
    email: user ? user.email : "",
    income: "",
    phone: "",
    amount: "",
    duration: "",
    reason: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
  });

  const { mutateAsync: Addloan } = useMutation({
    mutationFn: createLoan,
  });

  const onSubmit = async (data) => {
    try {

      const dt = {name: data.name, email: data.email, phone: data.phone, amount: data.amount, duration_months: data.duration, reason: data.reason, user: user.id, status: "pending", approved_date: null};
      const result = await Addloan(dt);
      console.log("API response:", result);
      
      reset();
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <div className="modal-content">
        <h2>Loan Application</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label="Name"
            id="name"
            type="text"
            register={register}
            error={errors.name}
            isRequired={true}
          />
          <FormInput
            label="Email"
            id="email"
            type="email"
            register={register}
            error={errors.email}
            isRequired={false}
          />

          <FormInput
            label="Monthly Income"
            id="imcome"
            type="text"
            register={register}
            error={errors.imcome}
            isRequired={true}
          />
          <FormInput
            label="Phone"
            id="phone"
            type="text"
            register={register}
            error={errors.phone}
            isRequired={true}
          />
          <FormInput
            label="Amount Requested"
            id="amount"
            type="text"
            register={register}
            error={errors.amount}
            isRequired={true}
          />
          <FormInput
            label="Duration (months)"
            id="duration"
            type="select"
            register={register}
            error={errors.duration}
            options={durationOptions}
            isRequired={true}
          />
          <FormInput
            label="Reason"
            id="reason"
            type="textarea"
            register={register}
            error={errors.reason}
            isRequired={false}
          />
          <div className="input">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </CustomModal>
  );
};

export default ApplyForm;
