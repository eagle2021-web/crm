import React, { FC } from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { PoweroffOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './sytles/app.scss';

const App: FC = () => (
  <div className="App" >
      <Button type="default" size={"small"} color={"#555555"} >Pri</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      <Button type="primary" shape="circle" icon={<DownloadOutlined />}/>
      <Button type="primary" icon={<PoweroffOutlined />} loading />
  </div>
);

export default App;
