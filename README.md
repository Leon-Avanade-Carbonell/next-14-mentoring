## Installation

### Next 14

For this mentoring session, we would be focusing on the use of Next 14. The time of writing, Next 15 just came out and it is using React 19 release candidate which is not supported by most of the libraries used in the sessions

```bash
npx create-next-app@14.2.14
```

Tanstack query would be the way we call the server components

```bash
npm install @tanstack/react-query
```

We need to wrap our application with a queryClient provider to allow the use of the tanstack queries

<details>
<summary>create a new file `app/components/providers.tsx`</summary>

```typescript
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

type IProvidersProps = {
  children: ReactNode;
};

function Providers({ children }: IProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default Providers;
```

</details>

<br />

In the app layout, wrap the body of the application

<details>
<summary>
Changes in the `app/layout.tsx`
</summary>

```typescript
<html lang="en">
  <Providers>
    <body>{children}</body>
  </Providers>
</html>
```

</details>

<br />

## Optional DX libraries

### prettier-eslint package and configuration

Install the prettier-eslint package and add the configuration file to format the codes

```bash
npm install --save-dev prettier-eslint
```

Add the configuration file for prettier

<details>
<summary>
Create a `.prettierrc` file</summary>

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}
```

</details>

<br/>

### Tailwindcss extension for prettier

Install the tailwind-prettier extension to sort your tailwind classes

```bash
npm install -D prettier prettier-plugin-tailwindcss
```

Update the `.prettierrc` file with the addition of

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## ShadCN

Install the package

```bash
npx shadcn@latest init

```
