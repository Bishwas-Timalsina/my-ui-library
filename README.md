# @bishwas-timalsina/my-ui-library

A reusable React UI component library built with **React, TypeScript, Tailwind CSS, and Vite**. It ships a set of accessible, themeable components (Button, Input, Modal, Table, Tabs, and more) with sensible variants, sizes, and states out of the box.

## Features

- 🎨 19 ready-to-use components (Button, Avatar, Alert, Badge, Card, Checkbox, Divider, Input, Label, Modal, Pagination, Radio, Select, Spinner, Switch, Table, Tabs, Text, TextArea)
- 🧩 Fully typed with TypeScript — props, variants, and sizes are all typed
- 🎯 Built with `class-variance-authority` + `tailwind-merge` for consistent, composable styling
- 📦 Ships as ESM and CommonJS, with bundled type declarations
- 🌗 Works with React 18 and 19

## Installation

```bash
npm install @bishwas-timalsina/my-ui-library
```

This package has `react` and `react-dom` (`^18` or `^19`) as peer dependencies, so make sure they're installed in your project.

## Setup

Import the stylesheet once, near the root of your app (e.g. in `main.tsx` or `App.tsx`):

```tsx
import "@bishwas-timalsina/my-ui-library/style.css";
```

Then import any component from the package root:

```tsx
import { Button } from "@bishwas-timalsina/my-ui-library";

function App() {
  return <Button label="Click me" variant="primary" />;
}
```

## Components

### Button

```tsx
import { Button } from "@bishwas-timalsina/my-ui-library";

<Button label="Save" variant="primary" size="md" />
<Button label="Delete" variant="error" isLoading />
```

| Prop         | Type                                                                                              | Default     |
| ------------ | ------------------------------------------------------------------------------------------------- | ----------- |
| `label`      | `string`                                                                                          | —           |
| `icon`       | `ReactNode`                                                                                       | —           |
| `variant`    | `"primary" \| "secondary" \| "ghost" \| "outline" \| "link" \| "success" \| "warning" \| "error"` | `"primary"` |
| `size`       | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                                                            | `"md"`      |
| `invert`     | `boolean`                                                                                         | `false`     |
| `fullWidth`  | `boolean`                                                                                         | `false`     |
| `rounded`    | `"none" \| "sm" \| "md" \| "full"`                                                                | —           |
| `isLoading`  | `boolean`                                                                                         | `false`     |
| `textSize`   | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                                                            | —           |
| `textWeight` | `"light" \| "normal" \| "medium" \| "semibold" \| "bold"`                                         | —           |

Also accepts all standard `<button>` HTML attributes.

### Input

```tsx
<Input label="Email" placeholder="you@example.com" leftIcon={<MailIcon />} />
```

| Prop                     | Type                                             | Default     |
| ------------------------ | ------------------------------------------------ | ----------- |
| `label`                  | `string`                                         | —           |
| `helperText`             | `string`                                         | —           |
| `error`                  | `string`                                         | —           |
| `variant`                | `"default" \| "outline" \| "filled" \| "ghost"`  | `"default"` |
| `state`                  | `"default" \| "error" \| "success" \| "warning"` | `"default"` |
| `inputSize`              | `"sm" \| "md" \| "lg"`                           | `"md"`      |
| `rounded`                | `"none" \| "sm" \| "md" \| "lg" \| "full"`       | —           |
| `leftIcon` / `rightIcon` | `ReactNode`                                      | —           |
| `fullWidth`              | `boolean`                                        | `false`     |

Also accepts all standard `<input>` HTML attributes.

### TextArea

Same shape as `Input`, plus `resize` (`"none" | "vertical" | "horizontal" | "both"`) and `startAdornment` / `endAdornment` (`ReactNode`).

### Select

```tsx
<Select
  label="Country"
  options={[
    { label: "Nepal", value: "np" },
    { label: "USA", value: "us" },
  ]}
  value={value}
  onChange={setValue}
  searchable
  clearable
/>
```

| Prop                                                  | Type                                                               | Default      |
| ----------------------------------------------------- | ------------------------------------------------------------------ | ------------ |
| `options`                                             | `{ label: string; value: string \| number; disabled?: boolean }[]` | — (required) |
| `value`                                               | `string \| number`                                                 | —            |
| `onChange`                                            | `(value: string \| number) => void`                                | —            |
| `placeholder`                                         | `string`                                                           | —            |
| `helperText` / `error`                                | `string`                                                           | —            |
| `searchable` / `clearable` / `disabled` / `fullWidth` | `boolean`                                                          | `false`      |
| `variant`                                             | `"default" \| "outline" \| "filled" \| "ghost" \| "error"`         | `"default"`  |
| `size`                                                | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                             | `"md"`       |
| `rounded`                                             | `"none" \| "sm" \| "md" \| "full"`                                 | —            |

### Checkbox / Radio / Switch

All three share a similar shape:

| Prop                   | Type                                                            | Default     |
| ---------------------- | --------------------------------------------------------------- | ----------- |
| `label`                | `string`                                                        | —           |
| `variant`              | `"primary" \| "secondary" \| "success" \| "warning" \| "error"` | `"primary"` |
| `size`                 | `"sm" \| "md" \| "lg"`                                          | `"md"`      |
| `helperText` / `error` | `string`                                                        | —           |
| `fullWidth`            | `boolean`                                                       | `false`     |

`Checkbox` additionally supports `indeterminate?: boolean`.

```tsx
<Checkbox label="Accept terms" />
<Radio label="Option A" name="group" />
<Switch label="Enable notifications" />
```

### Label

```tsx
<Label required>Username</Label>
```

| Prop                    | Type                                                                     | Default     |
| ----------------------- | ------------------------------------------------------------------------ | ----------- |
| `required` / `optional` | `boolean`                                                                | `false`     |
| `variant`               | `"default" \| "primary" \| "success" \| "warning" \| "error" \| "muted"` | `"default"` |
| `size`                  | `"xs" \| "sm" \| "md" \| "lg"`                                           | `"md"`      |

### Card

```tsx
<Card variant="outline" padding="md" shadow="sm">
  Content goes here
</Card>
```

| Prop        | Type                                                                                  | Default     |
| ----------- | ------------------------------------------------------------------------------------- | ----------- |
| `variant`   | `"default" \| "outline" \| "ghost" \| "primary" \| "success" \| "warning" \| "error"` | `"default"` |
| `padding`   | `"none" \| "sm" \| "md" \| "lg"`                                                      | `"md"`      |
| `rounded`   | `"none" \| "sm" \| "md" \| "full"`                                                    | —           |
| `shadow`    | `"none" \| "sm" \| "md" \| "lg"`                                                      | —           |
| `fullWidth` | `boolean`                                                                             | `false`     |

### Alert

```tsx
<Alert
  title="Heads up"
  description="Your session will expire soon."
  variant="warning"
  closable
  onClose={() => {}}
/>
```

| Prop                    | Type                                          | Default  |
| ----------------------- | --------------------------------------------- | -------- |
| `title` / `description` | `string`                                      | —        |
| `variant`               | `"info" \| "success" \| "warning" \| "error"` | `"info"` |
| `appearance`            | `"solid" \| "soft" \| "outline"`              | `"soft"` |
| `icon`                  | `ReactNode`                                   | —        |
| `closable`              | `boolean`                                     | `false`  |
| `onClose`               | `() => void`                                  | —        |
| `action`                | `ReactNode`                                   | —        |
| `fullWidth`             | `boolean`                                     | `false`  |
| `rounded`               | `"sm" \| "md" \| "lg"`                        | —        |

### Badge

```tsx
<Badge label="New" variant="success" dot />
```

| Prop                     | Type                                                                      | Default     |
| ------------------------ | ------------------------------------------------------------------------- | ----------- |
| `label`                  | `string`                                                                  | —           |
| `variant`                | `"primary" \| "secondary" \| "success" \| "warning" \| "error" \| "info"` | `"primary"` |
| `appearance`             | `"solid" \| "outline" \| "soft"`                                          | `"solid"`   |
| `size`                   | `"xs" \| "sm" \| "md" \| "lg"`                                            | `"md"`      |
| `rounded`                | `"sm" \| "md" \| "full"`                                                  | —           |
| `icon`                   | `ReactNode`                                                               | —           |
| `dot`                    | `boolean`                                                                 | `false`     |
| `removable` / `onRemove` | `boolean` / `() => void`                                                  | —           |

### Avatar

```tsx
<Avatar src="/avatar.jpg" name="Bishwas Timalsina" status="online" />
```

| Prop                   | Type                                                                      | Default  |
| ---------------------- | ------------------------------------------------------------------------- | -------- |
| `src` / `alt` / `name` | `string`                                                                  | —        |
| `icon`                 | `ReactNode`                                                               | —        |
| `size`                 | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                                    | `"md"`   |
| `rounded`              | `"none" \| "sm" \| "md" \| "full"`                                        | `"full"` |
| `background`           | `"primary" \| "secondary" \| "success" \| "warning" \| "error" \| "info"` | —        |
| `status`               | `"online" \| "offline" \| "away" \| "busy"`                               | —        |
| `border`               | `boolean`                                                                 | `false`  |
| `imageProps`           | `ImgHTMLAttributes<HTMLImageElement>`                                     | —        |

### Divider

```tsx
<Divider label="OR" />
<Divider orientation="vertical" />
```

| Prop          | Type                                                                                   | Default        |
| ------------- | -------------------------------------------------------------------------------------- | -------------- |
| `orientation` | `"horizontal" \| "vertical"`                                                           | `"horizontal"` |
| `variant`     | `"solid" \| "dashed" \| "dotted"`                                                      | `"solid"`      |
| `size`        | `"sm" \| "md" \| "lg"`                                                                 | —              |
| `color`       | `"default" \| "primary" \| "secondary" \| "success" \| "warning" \| "error" \| "info"` | `"default"`    |
| `label`       | `ReactNode`                                                                            | —              |

### Modal

```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm"
  footer={<Button label="OK" />}
>
  Are you sure you want to continue?
</Modal>
```

| Prop                  | Type                                 | Default     |
| --------------------- | ------------------------------------ | ----------- |
| `open`                | `boolean`                            | `false`     |
| `onClose`             | `() => void`                         | —           |
| `title`               | `string`                             | —           |
| `footer`              | `ReactNode`                          | —           |
| `size`                | `"sm" \| "md" \| "lg" \| "xl"`       | `"md"`      |
| `variant`             | `"default" \| "danger" \| "success"` | `"default"` |
| `closeOnOverlayClick` | `boolean`                            | `true`      |

### Pagination

```tsx
<Pagination page={page} totalPages={10} onPageChange={setPage} />
```

| Prop                             | Type                               | Default      |
| -------------------------------- | ---------------------------------- | ------------ |
| `page`                           | `number`                           | — (required) |
| `totalPages`                     | `number`                           | — (required) |
| `onPageChange`                   | `(page: number) => void`           | — (required) |
| `siblingCount`                   | `number`                           | —            |
| `showFirstLast` / `showPrevNext` | `boolean`                          | `true`       |
| `variant`                        | `"solid" \| "outline" \| "ghost"`  | `"solid"`    |
| `size`                           | `"sm" \| "md" \| "lg"`             | `"md"`       |
| `rounded`                        | `"none" \| "sm" \| "md" \| "full"` | —            |
| `fullWidth` / `disabled`         | `boolean`                          | `false`      |

### Table

```tsx
<Table
  columns={[
    { key: "name", title: "Name" },
    { key: "age", title: "Age", align: "right" },
  ]}
  data={rows}
  rowKey="id"
  hoverable
  striped
/>
```

| Prop                                                    | Type                                                                                                                                                            | Default      |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `columns`                                               | `{ key: keyof T \| string; title: ReactNode; width?: string \| number; align?: "left" \| "center" \| "right"; render?: (value, record, index) => ReactNode }[]` | — (required) |
| `data`                                                  | `T[]`                                                                                                                                                           | — (required) |
| `rowKey`                                                | `keyof T \| ((record: T) => string)`                                                                                                                            | —            |
| `loading`                                               | `boolean`                                                                                                                                                       | `false`      |
| `emptyText`                                             | `ReactNode`                                                                                                                                                     | —            |
| `variant`                                               | `"default" \| "bordered" \| "minimal"`                                                                                                                          | `"default"`  |
| `size`                                                  | `"sm" \| "md" \| "lg"`                                                                                                                                          | `"md"`       |
| `hoverable` / `striped` / `stickyHeader` / `responsive` | `boolean`                                                                                                                                                       | —            |
| `onRowClick`                                            | `(record: T, index: number) => void`                                                                                                                            | —            |

### Tabs

```tsx
<Tabs
  items={[
    { value: "a", label: "Tab A", content: <div>Content A</div> },
    { value: "b", label: "Tab B", content: <div>Content B</div> },
  ]}
  defaultValue="a"
/>
```

| Prop                     | Type                                                                                           | Default        |
| ------------------------ | ---------------------------------------------------------------------------------------------- | -------------- |
| `items`                  | `{ value: string; label: string; icon?: ReactNode; disabled?: boolean; content: ReactNode }[]` | — (required)   |
| `defaultValue` / `value` | `string`                                                                                       | —              |
| `onValueChange`          | `(value: string) => void`                                                                      | —              |
| `variant`                | `"solid" \| "soft" \| "outline" \| "underline"`                                                | `"solid"`      |
| `size`                   | `"sm" \| "md" \| "lg"`                                                                         | `"md"`         |
| `rounded`                | `"none" \| "sm" \| "md" \| "full"`                                                             | —              |
| `orientation`            | `"horizontal" \| "vertical"`                                                                   | `"horizontal"` |
| `fullWidth`              | `boolean`                                                                                      | `false`        |

### Spinner

```tsx
<Spinner size="lg" variant="primary" label="Loading..." />
```

| Prop      | Type                                                                      | Default     |
| --------- | ------------------------------------------------------------------------- | ----------- |
| `size`    | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                                    | `"md"`      |
| `variant` | `"primary" \| "secondary" \| "success" \| "warning" \| "error" \| "info"` | `"primary"` |
| `type`    | `"border" \| "dots"`                                                      | `"border"`  |
| `label`   | `string`                                                                  | —           |

### Text

```tsx
<Text as="h1" content="Hello world" />
```

Renders as any element via the `as` prop, and accepts `children`, `content`, `icon`, `iconPosition` (`"left" | "right"`), plus the variant props defined by its internal `class-variance-authority` config.

## Peer dependencies

```json
{
  "react": "^18 || ^19",
  "react-dom": "^18 || ^19"
}
```

## License

MIT
