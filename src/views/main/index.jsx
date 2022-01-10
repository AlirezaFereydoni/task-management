// style
import { MainWrapper } from "./style";

// layout
import { MainPageLayout } from "../../layouts/main-page";

// components
import { Card } from "../../components/card";

// createTask
import CreateTask from "./create-task";

// store
import { useContext } from "react";
import { Context } from "../../controller";

const Main = () => {
  const { tasks } = useContext(Context);

  return (
    <MainWrapper>
      <MainPageLayout path="Task Management > Home">
        <CreateTask />
      </MainPageLayout>
      <div className="main-header">
        <h4>Tasks</h4>
      </div>

      <section className={`main-section ${tasks.length > 0 ? "item-wrapper" : "text-wrapper"}`}>
        {tasks.length === 0 && (
          <p>
            <span>You have nothing to do.</span>
            <span>Go get some sleep.</span>
          </p>
        )}

        {tasks.length > 0 && tasks.map(item => <Card key={item.id} {...item} />)}
      </section>
    </MainWrapper>
  );
};

export default Main;
