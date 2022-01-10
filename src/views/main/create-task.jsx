import { Fragment } from "react";

// hooks
import { useForm } from "../../hooks/";

// components
import { Input } from "../../components/input";
import { TextArea } from "../../components/text-area";
import { BlueBtn } from "../../components/button";
import { Icon } from "../../components/icon";

const CreateTask = () => {
  const [form, setForm] = useForm({ title: "", description: "" });

  const createTask = () => {};

  return (
    <Fragment>
      <h2 className="my-1">Add a new Task</h2>
      <Input
        placeholder="Title"
        onChange={e => setForm({ type: "CHANGE", name: "title", value: e.target.value })}
        value={form.title}
      />

      <TextArea
        placeholder="Description"
        onChange={e => setForm({ type: "CHANGE", name: "description", value: e.target.value })}
        value={form.description}
      />

      <BlueBtn onClick={createTask}>
        <Icon name="add" size="0.8" fill="white" />
        Add
      </BlueBtn>
    </Fragment>
  );
};

export default CreateTask;
