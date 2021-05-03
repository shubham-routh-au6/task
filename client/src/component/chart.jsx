import React from "react";
import Axios from "axios";
import Chart from "react-google-charts";


const PieChart = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        Axios.get("http://localhost:8090/user")
            .then((result) => {
                const json = result.data.data.skills;
                const dataNames = Object.keys(json)
                const dataValues = Object.values(json)
                const chartData = [['Dev', 'Skills']]
                for (let i = 0; i < dataNames.length; i += 1) {
                    chartData.push([dataNames[i], parseInt(dataValues[i], 10)])
                }
                setData(chartData);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, []);

    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={{
                title: 'Dev skills',
                is3D: true,
            }}
            rootProps={{ 'data-testid': '2' }}
        />
    );
}

export default PieChart;
