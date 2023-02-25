import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack } from "@pankod/refine-mui";

import { PieChartProps } from "interfaces/home";

const PieChart = ({ title, value, unit, series, colors }: PieChartProps) => {
    return (
        <Box
            id="chart"
            flex={1}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            pl={3.5}
            py={2}
            gap={2}
            borderRadius="15px"
            minHeight="110px"
            width="fit-content"
            sx={{
                backgroundColor: (theme) => theme.palette.background.paper,
            }}
        >
            <Stack direction="column">
                <Typography fontSize={14} sx={{ color: (theme) => theme.palette.text.secondary }}>
                    {title}
                </Typography>
                <Typography
                    fontSize={22}
                    fontWeight={700}
                    mt={1}
                    sx={{ color: (theme) => theme.palette.text.primary }}
                >
                    {value} {unit}
                </Typography>
            </Stack>

            <ReactApexChart
                options={{
                    chart: { type: "donut" },
                    colors,
                    legend: { show: false },
                    dataLabels: { enabled: false },
                }}
                series={series}
                type="donut"
                width="120px"
            />
        </Box>
    );
};

export default PieChart;
