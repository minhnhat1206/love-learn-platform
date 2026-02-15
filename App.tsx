
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import LessonPlayer from './pages/LessonPlayer';
import Schedule from './pages/Schedule';
import LessonList from './pages/LessonList';
import Rewards from './pages/Rewards';
import TestList from './pages/TestList';
import TestViewer from './pages/TestViewer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/lessons" element={<LessonList />} />
          <Route path="/tests" element={<TestList />} />
          <Route path="/tests/:id" element={<TestViewer />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/learn/:id" element={<LessonPlayer />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
