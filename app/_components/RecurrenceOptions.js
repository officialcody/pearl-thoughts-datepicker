export default function RecurrenceOptions({
  recurringOptionValue,
  setRecurringOptionValue,
  recurringOptionFrequency,
  setRecurringOptionFrequency,
}) {
  const recurringOptionValueChangeHandler = (event) => {
    setRecurringOptionValue(event.target.value);
  };

  const recurringFrequencyChangeHandler = (event) => {
    if (event.target.value === "") {
      setRecurringOptionFrequency(1);
    } else {
      setRecurringOptionFrequency(event.target.value);
    }
  };

  const handleRepetitonFrequencyTimeFrameChange = () => {};

  return (
    <>
      <div className="my-4 text-center text-sm text-black">
        <h1 className="text-xl font-bold my-2">Recurring Event/Task</h1>
        <select
          className="p-2 border rounded-md mx-2"
          onChange={recurringOptionValueChangeHandler}
          defaultValue={recurringOptionValue}
        >
          <option value="once">Once</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
          <option value="custom">Custom</option>
        </select>
      </div>

      {recurringOptionValue === "custom" && (
        <div className="mt-4 text-center text-sm text-black relative">
          <label className="absolute p-2">Every</label>
          <input
            className="border rounded-md p-2 text-right w-[30%]"
            type="text"
            value={recurringOptionFrequency}
            onChange={recurringFrequencyChangeHandler}
          />
          <select
            className="p-2 border rounded-md mx-2"
            onChange={handleRepetitonFrequencyTimeFrameChange}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      )}
    </>
  );
}
