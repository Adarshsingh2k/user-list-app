import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useQuery } from "react-query";
import axios from "axios";
import "../App.css";

const fetchCountries = async () => {
  const { data } = await axios.get("https://restcountries.com/v3.1/all");
  return data;
};

const AddUserForm = ({ onSubmit, onCancel }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { data: countries, isLoading } = useQuery("countries", fetchCountries);

  const handleFormSubmit = (data) => {
    console.log(data);
    onSubmit(data);
    reset();
  };

  const handleCancel = () => {
    reset();
    onCancel();
  };

  useEffect(() => {
    if (!isLoading) {
      reset();
    }
  }, [isLoading, reset]);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              rules={{ required: "Country is required" }}
              render={({ field }) => (
                <select className="form-control" {...field}>
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.cca3} value={country.name.common}>
                      {country.name.common}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.country && (
              <div className="text-danger">{errors.country.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              Role
            </label>
            <Controller
              name="role"
              control={control}
              defaultValue=""
              rules={{ required: "Role is required" }}
              render={({ field }) => (
                <select className="form-control" {...field}>
                  <option value="">Select Role</option>
                  <option value="role1">Role1</option>
                  <option value="role2">Role2</option>
                  <option value="role3">Role3</option>
                </select>
              )}
            />
            {errors.role && (
              <div className="text-danger">{errors.role.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="supervisor" className="form-label">
              Supervisor
            </label>
            <Controller
              name="supervisor"
              control={control}
              defaultValue=""
              rules={{ required: "Supervisor is required" }}
              render={({ field }) => (
                <select className="form-control" {...field}>
                  <option value="">Select Supervisor</option>
                  <option value="sup1">Sup1</option>
                  <option value="sup2">Sup2</option>
                  <option value="sup3">Sup3</option>
                </select>
              )}
            />
            {errors.supervisor && (
              <div className="text-danger">{errors.supervisor.message}</div>
            )}
          </div>

          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                rules={{ required: "First Name is required" }}
                render={({ field }) => (
                  <input type="text" className="form-control" {...field}></input>
                )}
              />
              {errors.firstName && (
                <div className="text-danger">{errors.firstName.message}</div>
              )}
            </div>

            <div className="col">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                rules={{ required: "Last Name is required" }}
                render={({ field }) => (
                  <input type="text" className="form-control" {...field}></input>
                )}
              />
              {errors.lastName && (
                <div className="text-danger">{errors.lastName.message}</div>
              )}
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="mobileCode" className="form-label">
              Mobile Number
            </label>
            <div className="col-2">
              <Controller
                name="mobileCode"
                control={control}
                defaultValue=""
                rules={{ required: "Mobile Code is required" }}
                render={({ field }) => (
                  <select className="form-control" {...field}>
                    <option value="">Select Mobile Code</option>
                    <option value="966">966</option>
                    <option value="971">971</option>
                    <option value="91">91</option>
                  </select>
                )}
              />
              {errors.mobileCode && (
                <div className="text-danger">{errors.mobileCode.message}</div>
              )}
            </div>
            <div className="col">
              <Controller
                name="mobileNumber"
                control={control}
                defaultValue=""
                rules={{ required: "Mobile Number is required" }}
                render={({ field }) => (
                  <input type="text" className="form-control" {...field} />
                )}
              />
              {errors.mobileNumber && (
                <div className="text-danger">{errors.mobileNumber.message}</div>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <input type="email" className="form-control" {...field}></input>
              )}
            />
            {errors.email && (
              <div className="text-danger">{errors.email.message}</div>
            )}
          </div>

          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="cardLoadLimit" className="form-label">
                Card Load Limit
              </label>
              <Controller
                name="cardLoadLimit"
                control={control}
                defaultValue=""
                rules={{
                  required: "Card Load Limit is required",
                  valueAsNumber: true,
                }}
                render={({ field }) => (
                  <input type="number" className="form-control" {...field} />
                )}
              />
              {errors.cardLoadLimit && (
                <div className="text-danger">{errors.cardLoadLimit.message}</div>
              )}
            </div>

            <div className="col">
              <label htmlFor="paymentLimit" className="form-label">
                Payment Limit
              </label>
              <Controller
                name="paymentLimit"
                control={control}
                defaultValue=""
                rules={{
                  required: "Payment Limit is required",
                  valueAsNumber: true,
                }}
                render={({ field }) => (
                  <input type="number" className="form-control" {...field} />
                )}
              />
              {errors.paymentLimit && (
                <div className="text-danger">{errors.paymentLimit.message}</div>
              )}
            </div>
          </div>

          <button type="submit" className="btn primary text-white">
            + Add User
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="btn grey text-black ms-3"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
        </>
      )}
    </form>
  );
};

export default AddUserForm;
