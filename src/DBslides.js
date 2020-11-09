import capacityLogo from "./img/capacity-light.svg";
import scheduleLogo from "./img/schedule-light.svg";
import managementLogo from "./img/management-light.svg";
import communicationLogo from "./img/communication-light.svg";
import capacityActive from "./img/capacity-active.svg";
import scheduleActive from "./img/schedule-active.svg";
import managementActive from "./img/management-active.svg";
import communicationActive from "./img/communication-active.svg";
import capacitySlide from "./img/illustration1.jpg";
import scheduleSlide from "./img/illustration2.jpg";
import managemenSlide from "./img/illustration3.jpg";
import communicationSlide from "./img/illustration4.jpg";

export const DBslides = [
  {
    descriptionText: "Capacity planning",
    imgLight: capacityLogo,
    imgActive: capacityActive,
    slideTitle: "Capacity planning",
    slideText:
      "Set capacity limits and turn on alerts to limit access when the building reaches capacity. Ensure social distancing and avoid overcrowding.",
    slideImg: capacitySlide,
  },
  {
    descriptionText: "Staggered schedules",
    imgLight: scheduleLogo,
    imgActive: scheduleActive,
    slideTitle: "Staggered schedules",
    slideText:
      "Create multiple user groups and assign staggered schedules to users. Deny access outside of a set schedule. Change and update schedules easily that employees can check from the app.",
    slideImg: scheduleSlide,
  },
  {
    descriptionText: "PPE management",
    imgLight: managementLogo,
    imgActive: managementActive,
    slideTitle: "PPE management",
    slideText:
      "Keep track of all your critical PPE inventory. Prioritize and track PPE allocation to highest at-risk employees.",
    slideImg: managemenSlide,
  },
  {
    descriptionText: "Employee communication",
    imgLight: communicationLogo,
    imgActive: communicationActive,
    slideTitle: "Employee communication",
    slideText:
      "Send out timely announcements for COVID-19 health-related news and guidelines, directly in the app. Ensure employees update critical contacts in case of emergency.",
    slideImg: communicationSlide,
  },
];
