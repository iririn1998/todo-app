import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { TodoItem } from ".";

const meta = {
  title: "Components/TodoApp/TodoItem",
  component: TodoItem,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "neumorphism",
      values: [{ name: "neumorphism", value: "#e0e5ec" }],
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ul style={{ listStyle: "none", margin: 0, padding: 0, width: "520px" }}>
        <Story />
      </ul>
    ),
  ],
  args: {
    onToggle: fn(),
    onDelete: fn(),
    onEdit: fn(),
  },
  argTypes: {
    todo: {
      description: "TODOアイテムのデータ",
    },
    onToggle: {
      description: "完了状態の切り替えハンドラ",
    },
    onDelete: {
      description: "削除ハンドラ",
    },
    onEdit: {
      description: "編集ハンドラ",
    },
  },
} satisfies Meta<typeof TodoItem>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 未完了のTODOアイテム */
export const Default: Story = {
  args: {
    todo: {
      id: "1",
      text: "牛乳を買う",
      completed: false,
    },
  },
};

/** 完了済みのTODOアイテム */
export const Completed: Story = {
  args: {
    todo: {
      id: "2",
      text: "レポートを提出する",
      completed: true,
    },
  },
};

/** 長いテキストのTODOアイテム */
export const LongText: Story = {
  args: {
    todo: {
      id: "3",
      text: "プロジェクトのドキュメントを更新して、チームメンバー全員にレビュー依頼のメールを送信する。期限は来週金曜日まで。",
      completed: false,
    },
  },
};

/** 状態の一覧 */
export const Overview: Story = {
  args: {
    todo: { id: "1", text: "未完了のタスク", completed: false },
  },
  render: (args) => {
    const actions = {
      onToggle: args.onToggle,
      onDelete: args.onDelete,
      onEdit: args.onEdit,
    };
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "520px",
        }}
      >
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <TodoItem
            todo={{ id: "1", text: "未完了のタスク", completed: false }}
            {...actions}
          />
        </ul>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <TodoItem
            todo={{ id: "2", text: "完了済みのタスク", completed: true }}
            {...actions}
          />
        </ul>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <TodoItem
            todo={{
              id: "3",
              text: "長いテキストのタスク — プロジェクトのドキュメントを更新して、チームメンバー全員にレビュー依頼を送信する",
              completed: false,
            }}
            {...actions}
          />
        </ul>
      </div>
    );
  },
};
