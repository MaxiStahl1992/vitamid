import React from 'react';
import {
  Box,
  Typography,
} from '@pankod/refine-mui';
import { PieChart } from 'components';

const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="(theme) => theme.palette.text.primary">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title='Vitamin A'
          value={684}
          unit="mmol"
          series={[75, 25]}
          colors={["#AA0015", "#c4e8ef"]}
        />
        <PieChart
          title='Vitamin D'
          value={684}
          unit="mmol"
          series={[75, 25]}
          colors={["#AA0015", "#c4e8ef"]}
        />
        <PieChart
          title='Magnesium'
          value={684}
          unit="mmol"
          series={[75, 25]}
          colors={["#AA0015", "#c4e8ef"]}
        />
        <PieChart
          title='Selen'
          value={684}
          unit="mmol"
          series={[75, 25]}
          colors={["#AA0015", "#c4e8ef"]}
        />
      </Box>
    </Box>
  )
}

export default Home