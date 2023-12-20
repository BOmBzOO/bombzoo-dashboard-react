// @mui material components

import SoftAvatar from "components/SoftAvatar";
import SoftBox from "components/SoftBox";
import SoftProgress from "components/SoftProgress";
import SoftTypography from "components/SoftTypography";
import Tooltip from "@mui/material/Tooltip";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

// Soft UI Dashboard React components





// Images











export default function data() {
  const avatars = (보유수) =>
    보유수.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <SoftAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "종목명", align: "left" },
      { name: "보유수", align: "center" },
      { name: "금액", align: "right" },
      { name: "수익률", align: "center" },
    ],

    rows: [
      {
        종목명: [logoXD, "삼성전자"],
        보유수: (
          <SoftBox display="flex" py={1}>
            10
          </SoftBox>
        ),
        금액: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            14,000
          </SoftTypography>
        ),
        수익률: (
          <SoftBox width="8rem" textAlign="center">
            +15.0%
          </SoftBox>
        ),
      },
      {
        종목명: [logoAtlassian, "카카오"],
        보유수: (
          <SoftBox display="flex" py={1}>
            15
          </SoftBox>
        ),
        금액: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            3,000
          </SoftTypography>
        ),
        수익률: (
          <SoftBox width="8rem" textAlign="center">
            +13.2%
          </SoftBox>
        ),
      },
      {
        종목명: [logoSlack, "서린바이오"],
        보유수: (
          <SoftBox display="flex" py={1}>
            24
          </SoftBox>
        ),
        금액: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            23,000
          </SoftTypography>
        ),
        수익률: (
          <SoftBox width="8rem" textAlign="center">
            +15.2%
          </SoftBox>
        ),
      },
      {
        종목명: [logoSpotify, "네이버"],
        보유수: (
          <SoftBox display="flex" py={1}>
            12
          </SoftBox>
        ),
        금액: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            20,500
          </SoftTypography>
        ),
        수익률: (
          <SoftBox width="8rem" textAlign="center">
            -1.5%
          </SoftBox>
        ),
      },
      {
        종목명: [logoJira, "현대자동차"],
        보유수: (
          <SoftBox display="flex" py={1}>
            14
          </SoftBox>
        ),
        금액: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            500,000
          </SoftTypography>
        ),
        수익률: (
          <SoftBox width="8rem" textAlign="center">
            -0.3%
          </SoftBox>
        ),
      },
      {
        종목명: [logoInvesion, "한미약품"],
        보유수: (
          <SoftBox display="flex" py={1}>
            6
          </SoftBox>
        ),
        금액: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            2,000
          </SoftTypography>
        ),
        수익률: (
          <SoftBox width="8rem" textAlign="center">
            +20.3%
          </SoftBox>
        ),
      },
    ],
  };
}
