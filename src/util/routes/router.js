import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../../components/rootLayout/RootLayout";
import ErrorPage from "../../pages/errorPage/ErrorPage";
import HomePage from "../../pages/homePage/HomePage";
import NetworkSetupAndManagementPage from "../../pages/networkSetupAndManagementPage/NetworkSetupAndManagementPage";
import HelpDeskAndTechnicalSupportPage from "../../pages/helpDeskAndTechnicalSupportPage/HelpDeskAndTechnicalSupportPage";
import DataBackupAndRecoveryPage from "../../pages/dataBackupAndRecoveryPage/DataBackupAndRecoveryPage";
import ItConsultingAndStrategyPage from "../../pages/itConsultingAndStrategyPage/ItConsultingAndStrategyPage";
import WebDesignPage from "../../pages/webDesignPage/WebDesignPage";
import GraphicDesignPage from "../../pages/graphicDesignPage/GraphicDesignPage";
import UiUxDesignPage from "../../pages/uiUxDesignPage/UiUxDesignpage";
import LetsTalkPage from "../../pages/letsTalkPage/LetsTalkPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "services",
        children: [
          {
            path: "network-setup-and-management",
            element: <NetworkSetupAndManagementPage />,
          },
          {
            path: "help-desk-and-technical-support",
            element: <HelpDeskAndTechnicalSupportPage />,
          },
          {
            path: "data-backup-and-recovery",
            element: <DataBackupAndRecoveryPage />,
          },
          {
            path: "it-consulting-and-strategy",
            element: <ItConsultingAndStrategyPage />,
          },
          {
            path: "web-design",
            element: <WebDesignPage />,
          },
          {
            path: "graphic-design",
            element: <GraphicDesignPage />,
          },
          {
            path: "ui-ux-design",
            element: <UiUxDesignPage />,
          },
        ],
      },
      {
        path: "lets-talk",
        element: <LetsTalkPage />,
      },
    ],
  },
]);
