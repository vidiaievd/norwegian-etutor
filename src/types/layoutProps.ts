export type LayoutProps = {
    children: React.ReactNode;
    params: Promise<{
      lng: string;
    }>;
  };