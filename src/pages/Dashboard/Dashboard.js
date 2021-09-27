import LineChart from "../../components/Chart/LineChart";
import { useState } from "react";

import {
  StyledCard,
  StyledTitle,
  DashboardBtn,
  DashboardHeader} from "./DashboardStyles";

  import {
    Row,
    Col,
    Container
  } from "react-bootstrap";

import {
  londonUrl,
  valenciaUrl,
  providenceUrl,
  charts,
  humidityPoints,
  temperaturePoints,
  windSpeedPoints,
  windDirectionPoints,
  } from "../../adapters/params";


const Dashboard = () => {
  const [humidity, setHumidity] = useState(humidityPoints);
  const [temperature, setTemperature] = useState(temperaturePoints);
  const [windSpeed, setWindSpeed] = useState(windSpeedPoints);
  const [windDirection, setWindDirection] = useState(windDirectionPoints);


  const fetchData = async (url) => {
      try {
        const res = await fetch(url);
        const resData = await res.json();

        const dataPoints = resData.daily.slice(0, 5)
        const humidityPoints = [];
        const temperaturePoints = [];
        const windSpeedPoints = [];
        const windDirectionPoints = [];
        
        dataPoints.forEach((day) => {
            humidityPoints.push(day.humidity);
            temperaturePoints.push(day.temp.day);
            windSpeedPoints.push(day.wind_speed);
            windDirectionPoints.push(day.wind_deg);
        })

        setHumidity(humidityPoints);
        setTemperature(temperaturePoints);
        setWindSpeed(windSpeedPoints);
        setWindDirection(windDirectionPoints);

    } catch (err) {
      alert(err.message)
    }};

    return (
      <>
        <Container className="my-4 mb-4">
          <div className="col-sm-12 text-center my-4">
            <div className="text-center my-4">
              <DashboardHeader>Choose a city</DashboardHeader>
              <DashboardBtn variant="secondary" onClick={() => fetchData(londonUrl)}>London</DashboardBtn>
              <DashboardBtn variant="secondary" onClick={() => fetchData(valenciaUrl)}>Valencia</DashboardBtn>
              <DashboardBtn variant="secondary" onClick={() => fetchData(providenceUrl)}>Providence</DashboardBtn>
            </div>
          </div>
        
          <Row xs={1} md={2} className="g-4 mx-4 my-4">
              <Col>
                <StyledCard>
                  <StyledTitle>{charts[0]}</StyledTitle>
                  <LineChart chartData={humidity} chartName={charts[0]}/>
                </StyledCard>
              </Col>

              <Col>
                <StyledCard>
                  <StyledTitle>{charts[1]}</StyledTitle>
                  <LineChart chartData={temperature} chartName={charts[1]} />
                </StyledCard>
              </Col>

              <Col>
                <StyledCard>
                  <StyledTitle>{charts[2]}</StyledTitle>
                  <LineChart chartData={windSpeed} chartName={charts[2]} />
                </StyledCard>
              </Col>

              <Col>
                <StyledCard>
                  <StyledTitle>{charts[3]}</StyledTitle>
                  <LineChart chartData={windDirection} chartName={charts[3]} />
                </StyledCard>
              </Col>
            
          </Row>
       </Container>
     </>
    );
}
export default Dashboard;