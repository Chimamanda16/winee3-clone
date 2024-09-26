import "./CSS/Tokenomics.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register( Tooltip, Legend, ArcElement )


const chartData = {
    labels: ["Seed & VC", "Marketing", "Community", "Staking", "Private", "Operating Liquidity", "public", "Team & Advisors", "Treasury"],
    datasets: [
        {
        label: "Total Supply",
        data: [15.984, 72.216, 2.484, 63, 6.516, 126, 7.2, 54, 12.6],
        backgroundColor: ["#580f3c", "#503ec6", "#fae661", "#53bc7b", "#a4fdf7", "#881743", "#ff4376", "#ff8160"],
        hoverOffset: 4
        }
    ]
}

const TokenomicsSect =() =>{
    return <>
        <div className="tokenomics">
            <div className="tokenomics-text">
                <img src="../images/tokenomics.webp" alt="Tokenomics image" />
                <h3>Tokenomics</h3>
                <p>The comprehensive distribution of Winee3 Token is meticulously illustrated in the chart that follows, offering a clear and detailed breakdown of how tokens are allocated and circulate within our platform. This commitment to transparency ensures that all users can fully understand the tokens journey and its significance in our ecosystem.</p>
            </div>
            <div className="tokenomics-chart">
                <Doughnut data={chartData} />
            </div>
        </div>
    </>
}

export default TokenomicsSect;