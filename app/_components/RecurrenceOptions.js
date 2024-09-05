"use client";
import { useState } from "react";

export default function RecurrenceOptions({
  recurringOptionValue,
  setRecurringOptionValue,
  recurringOptionFrequency,
  setRecurringOptionFrequency,
}) {
  const [showRecurrenceOptions, setShowRecurrenceOptions] = useState(false);

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
      <div className="mt-4 text-center text-sm text-black">
        <input
          className="p-2"
          type="checkbox"
          value={showRecurrenceOptions}
          onChange={(e) => setShowRecurrenceOptions(!showRecurrenceOptions)}
        />
        <label className="p-2">Recurrence Options</label>
      </div>
      {showRecurrenceOptions && (
        <div className="mt-2 text-center text-sm text-black">
          <select
            className="p-2 border rounded-md mx-2"
            onChange={recurringOptionValueChangeHandler}
            defaultValue={recurringOptionValue}
          >
            <option value="" disabled>
              Select an Option
            </option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="custom">Custom</option>
          </select>
        </div>
      )}
      {showRecurrenceOptions && recurringOptionValue === "custom" && (
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
