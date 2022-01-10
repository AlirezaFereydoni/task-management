import { Fragment } from "react";

// functions
import uuid from "react-uuid";

// context
import { Context } from "../../controller";

// hooks
import { useState, useContext, useMemo } from "react";

// components
import { Input } from "../../components/input";
import { TextArea } from "../../components/text-area";
import { BlueBtn } from "../../components/button";
import { Icon } from "../../components/icon";

const CreateTask = () => {
  // creation state
  const [form, setForm] = useState({ title: "", description: "", status: "todo" });

  // context api
  const { setTask } = useContext(Context);

  const validation = useMemo(() => form.title.trim() !== "", [form]);

  const createTask = () => {
    setTask({ type: "ADD", newTask: { ...form, id: uuid() } });
    setForm({ title: "", description: "", status: "todo" });
  };

  return (
    <Fragment>
      <h2 className="my-1">Add a new Task</h2>
      <Input
        placeholder="Title"
        onChange={e => setForm({ ...form, title: e.target.value })}
        value={form.title}
      />

      <TextArea
        placeholder="Description"
        onChange={e => setForm({ ...form, description: e.target.value })}
        value={form.description}
      />

      <BlueBtn onClick={createTask} disabled={!validation}>
        <Icon name="add" size="0.8" fill="white" />
        Add
      </BlueBtn>
    </Fragment>
  );
};

export default CreateTask;
