import React, { useContext } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import {
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Avatar,
} from "@pankod/refine-mui";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

import { ColorModeContext } from "contexts";

export const Header: React.FC = () => {
  const { mode, setMode } = useContext(ColorModeContext);

  const { data: user } = useGetIdentity();
  const shouldRenderHeader = true; // since we are using the dark/light toggle; we don't need to check if user is logged in or not.

  return shouldRenderHeader ? (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: (theme) => theme.palette.background.paper }}>
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          <IconButton
            onClick={() => {
              setMode();
            }}
            sx= {{
              color: (theme) => theme.palette.text.primary
            }}
          >
            {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
          </IconButton>
          <Stack
            direction="row"
            gap="16px"
            alignItems="center"
            justifyContent="center"
          >
            {user?.name ? (
              <Typography variant="subtitle2" sx={{ color: (theme) => theme.palette.text.primary}}>{user?.name}</Typography>
            ) : null}
            {user?.avatar ? (
              <Avatar src={user?.avatar} alt={user?.name} />
            ) : null}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  ) : null;
};
