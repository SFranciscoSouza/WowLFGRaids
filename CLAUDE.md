# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Development server at http://localhost:3000
npm run build      # Production build
npm run lint       # Check linting errors
npm run lint:fix   # Auto-fix linting issues
npm run format     # Format with Prettier
```

## Architecture Overview

**Stack:** React 17.0.2 + TypeScript 4.7.3 + Material-UI 5.8.2 + Create React App

**Routing:** React Router v6 with lazy loading. All routes in `src/router.tsx`.

**State Management:** Context API only (SidebarContext for sidebar toggle, ThemeContext for theme).

**Styling:** Emotion-based MUI styled components exclusively. NO CSS Modules, NO plain CSS files.

## Key Patterns

### Import Convention
Always use absolute imports from `src/`:
```tsx
import Footer from 'src/components/Footer';
import { SidebarContext } from 'src/contexts/SidebarContext';
```

### Component Structure
Components live in `src/components/ComponentName/index.tsx`:
```tsx
import { FC } from 'react';
import { styled, Box } from '@mui/material';

interface MyComponentProps {
  title: string;
  children?: ReactNode;
}

const Wrapper = styled(Box)(
  ({ theme }) => `
    padding: ${theme.spacing(2)};
    background: ${theme.palette.background.paper};
  `
);

const MyComponent: FC<MyComponentProps> = ({ title, children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MyComponent;
```

### Page Structure Template
Pages in `src/content/{category}/{PageName}/index.tsx`:
```tsx
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import Footer from 'src/components/Footer';
import { Grid, Container } from '@mui/material';

function MyPage() {
  return (
    <>
      <Helmet>
        <title>Page Title - Category</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* Content */}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default MyPage;
```

### Adding New Routes
1. Create page component in `src/content/`
2. Add lazy-loaded route in `src/router.tsx`:
```tsx
const MyPage = Loader(lazy(() => import('src/content/MyPage')));
// Add to routes array under SidebarLayout children
```
3. Update sidebar menu in `src/layouts/SidebarLayout/Sidebar/SidebarMenu/index.tsx`

### Responsive Design
Use MUI breakpoint syntax:
```tsx
<Box sx={{
  display: { xs: 'block', md: 'flex' },
  padding: { xs: 1, sm: 2, md: 3 }
}} />
```

## Theme System

Custom theme in `src/theme/schemes/NebulaFighterTheme.ts` with extended properties:
- `theme.colors.*` - Color palettes and gradients
- `theme.sidebar.*` - Sidebar styling (width, background, etc.)
- `theme.header.*` - Header styling (height, background, etc.)
- `theme.general.*` - Border radius and general settings

Access via `useTheme()` hook from `@mui/material`.

## Layout System

- **BaseLayout** (`src/layouts/BaseLayout/`) - For public pages (no sidebar)
- **SidebarLayout** (`src/layouts/SidebarLayout/`) - For authenticated pages with sidebar/header

Routes use `<Outlet />` from React Router v6 for nested rendering.

## TypeScript Configuration

- `strict: false` - Lenient type checking
- `baseUrl: "."` - Enables absolute imports
- `jsx: "react-jsx"` - No need to import React in files

## Naming Conventions

- Component folders: PascalCase (`Footer`, `PageTitle`)
- Component files: Always `index.tsx`
- Styled components: PascalCase with suffix (`HeaderWrapper`, `LogoText`)
- Variables/functions: camelCase
- Interfaces: PascalCase (`MyComponentProps`)
