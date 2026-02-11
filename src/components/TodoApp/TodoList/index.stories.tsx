import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { TodoList } from ".";

const meta = {
  title: "Components/TodoApp/TodoList",
  component: TodoList,
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
      <div style={{ width: "560px", padding: "24px" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    onToggle: fn(),
    onDelete: fn(),
    onEdit: fn(),
  },
  argTypes: {
    todos: {
      description: "TODOアイテムの配列",
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
} satisfies Meta<typeof TodoList>;

export default meta;
type Story = StoryObj<typeof meta>;

/** TODOが存在しない場合（空リスト） */
export const Empty: Story = {
  args: {
    todos: [],
  },
};

/** 複数のTODOを含むリスト */
export const WithItems: Story = {
  args: {
    todos: [
      { id: "1", text: "牛乳を買う", completed: false },
      { id: "2", text: "レポートを提出する", completed: true },
      { id: "3", text: "会議の準備をする", completed: false },
      { id: "4", text: "メールを確認する", completed: true },
    ],
  },
};

/** 単一アイテム */
export const SingleItem: Story = {
  args: {
    todos: [{ id: "1", text: "唯一のタスク", completed: false }],
  },
};

/** すべて完了済み */
export const AllCompleted: Story = {
  args: {
    todos: [
      { id: "1", text: "朝のジョギング", completed: true },
      { id: "2", text: "メールチェック", completed: true },
      { id: "3", text: "コードレビュー", completed: true },
    ],
  },
};
