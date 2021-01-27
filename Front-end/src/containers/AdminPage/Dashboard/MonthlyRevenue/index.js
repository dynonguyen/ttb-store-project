import { BarChartOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import statisticApi from 'apis/statisticApi';
import helpers from 'helpers';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

// tạo danh sách tháng
function generateLabels() {
  let result = [];
  for (let i = 0; i < 12; ++i) {
    result.push(`T${i + 1}`);
  }
  return result;
}

function MonthlyRevenue() {
  // năm hiện tại
  const year = new Date().getFullYear();
  const [data, setData] = useState({ thisYear: [], lastYear: [] });
  const [isLoading, setIsLoading] = useState(true);

  // Lây doanh thu
  useEffect(() => {
    let isSubScribe = true;
    async function getStaMonthlyRevenue(year) {
      try {
        setIsLoading(true);
        const response = await statisticApi.getStaMonthlyRevenue(year);
        if (isSubScribe && response) {
          const { thisYear, lastYear } = response.data;
          setData({ thisYear, lastYear });
          setIsLoading(false);
        }
      } catch (error) {
        setData({ thisYear: [], lastYear: [] });
        if (isSubScribe) setIsLoading(false);
      }
    }
    getStaMonthlyRevenue(year);
    return () => {
      isSubScribe = false;
    };
  }, []);

  // rendering ...
  return (
    <>
      {isLoading ? (
        <Spin
          tip="Đang thống kê ..."
          size="large"
          indicator={<BarChartOutlined spin />}
        />
      ) : (
        <Bar
          data={{
            labels: generateLabels(),
            datasets: [
              {
                backgroundColor: '#2EA62A',
                data: [...data.lastYear],
                label: `Năm ${year - 1}`,
              },
              {
                backgroundColor: '#4670FF',
                data: [...data.thisYear],
                label: `Năm ${year}`,
              },
            ],
          }}
          options={{
            legend: { display: true },
            title: {
              display: true,
              text: `Doanh thu theo từng tháng của năm ${year - 1}, ${year}`,
              fontSize: 18,
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    callback: function(value, index, values) {
                      return value >= 1000000000
                        ? `${(value / 1000000000).toFixed(1)} tỷ`
                        : value >= 1000000
                        ? `${(value / 1000000).toFixed(0)} tr`
                        : helpers.formatProductPrice(value);
                    },
                  },
                },
              ],
            },
          }}
        />
      )}
    </>
  );
}

export default MonthlyRevenue;
