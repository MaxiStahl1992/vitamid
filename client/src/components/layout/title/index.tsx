import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import { logoPicture, logoText } from 'assets';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logoPicture} alt="vitamid-logo" width="32px" />
        ) : (
          <img src={logoText} alt="vitamid-logo" width="140px" style={{ marginRight: "12px" }}/>
        )}
      </Link>
    </Button>
  );
};
