// style
import { EditWrapper } from "./style";

// layout
import NotFound from "../not-found";
import { MainPageLayout } from "../../layouts/main-page";

// hooks
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useStatus } from "../../hooks/useStatus";

// context
import { Context } from "../../controller";

// components
import { Input } from "../../components/input";
import { TextArea } from "../../components/text-area";
import { BlueBtn, WhiteBtn } from "../../components/button";
import { Icon } from "../../components/icon";
import { Select } from "../../components/select";

const EditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { tasks, setTask } = useContext(Context);

  const [form, setForm] = useState({ title: "", description: "", status: "todo", id: "" });

  const [isValid, SetIsValid] = useState(true);

  // status of items
  const [statusOptions, setCurrentStatus] = useStatus("todo");

  useEffect(() => {
    const item = tasks.find(task => task.id === id);

    if (item) {
      setForm(item);
      setCurrentStatus(item.status);
      SetIsValid(true);
    } else {
      SetIsValid(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, tasks]);

  const editTask = () => {
    if (form.status === "deployed") {
      setTask({ type: "DELETE", id: form.id });
    } else {
      setTask({ type: "EDIT", task: form });
    }
    navigate("/");
  };

  // if task doesn't exist
  if (!isValid) {
    return <NotFound />;
  }

  return (
    <EditWrapper>
      <MainPageLayout path="Task Management > Edit">
        <h2 className="my-1">Edit Task</h2>
        <Input
          placeholder="Title"
          onChange={e => setForm({ ...form, title: e.target.value })}
          value={form.title}
        />

        <TextArea
          placeholder="Description"
          onChange={e => setForm({ ...form, description: e.target.value })}
          value={form.description}
          height="18"
        />

        <Select
          placeholder="Status"
          onChange={selected => setForm({ ...form, status: selected.name })}
          initialValue={form.status}
          dataList={statusOptions}
        />

        <div className="section-button">
          <BlueBtn onClick={editTask}>
            <Icon name="edit" size="0.8" fill="white" />
            Edit
          </BlueBtn>
          <WhiteBtn onClick={() => navigate("/")}>Cancel</WhiteBtn>
        </div>
      </MainPageLayout>
    </EditWrapper>
  );
};

export default EditPage;
