import { useState } from "react";
import { Typography, Slider, Switch, Button, Grid, Box } from "@mui/material";

interface Props {}

const AutoTopUp: React.FC<Props> = () => {
  // State variables
  const [autoTopUp, setAutoTopUp] = useState<boolean>(true);
  const [creditValue, setCreditValue] = useState<number>(1200);

  // Event handlers
  const handleAutoTopUpToggle = () => {
    setAutoTopUp(!autoTopUp);
  };

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    setCreditValue(newValue as number);
  };

  const handleConfirmPurchase = () => {
    console.log("Selected credits:", creditValue);
  };

  // Slider marks
  const marks = [
    { value: 500, label: "$5", credit: 50 },
    { value: 1200, label: "$10", credit: 1200 },
    { value: 1700, label: "$15", credit: 1700 },
    { value: 2500, label: "$20", credit: 2500 },
    { value: 3900, label: "$25", credit: 3900 },
    { value: 5000, label: "$30", credit: 5000 },
  ];

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        {/* Auto Top-up Switch */}
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "24px",
              padding: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "6px",
              }}
            >
              <Typography variant="h6">Setup Auto Top-up</Typography>
              <Switch />
            </div>
            <Typography
              sx={{ color: "#7B7B7B" }}
              id="discrete-slider"
              gutterBottom
            >
              Once the credit goes below the threshold value, credits can be
              auto purchased. Setup auto top-up to enjoy <br /> uninterrupted
              services. You can disable this anytime to stop auto top-up.
            </Typography>
          </Box>
        </Grid>
        {/* Slider Section */}
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "24px",
              padding: "40px",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <Typography variant="h6">Setup Auto Top-up</Typography>
              <Switch
                checked={autoTopUp}
                onChange={handleAutoTopUpToggle}
                sx={{
                  "& .Mui-checked": {
                    color: "#fff",
                  },
                  "& .Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "#25ae9d",
                  },
                }}
              />
            </div>
            {autoTopUp && (
              <>
                <div style={{ width: "100%", marginBottom: "16px" }}>
                  <Typography
                    sx={{ color: "#7B7B7B" }}
                    id="discrete-slider"
                    gutterBottom
                  >
                    Once the credit goes below a minimum threshold
                    <span style={{ color: "#9747FF", fontWeight: "bold" }}>
                      {" "}
                      50
                    </span>
                    , we will auto-purchase
                    <span style={{ color: "#9747FF", fontWeight: "bold" }}>
                      1200
                    </span>
                    credits and add them to <br /> your account.{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      Learn more
                    </span>
                  </Typography>
                  {/* Slider Component */}
                  <Slider
                    defaultValue={1200}
                    value={creditValue}
                    onChange={handleSliderChange}
                    step={100}
                    marks={marks.map((mark) => ({
                      value: mark.value,
                      label: (
                        <>
                          <Grid
                            container
                            direction="column"
                            alignItems="center"
                          >
                            <Grid item>{mark.label}</Grid>
                            <Grid item>{mark.credit}</Grid>
                          </Grid>
                        </>
                      ),
                    }))}
                    min={500}
                    max={5000}
                    sx={{
                      "& .MuiSlider-rail": {
                        backgroundColor: "#E4E7EC",
                        height: 6, // Adjusted rail height
                      },
                      "& .MuiSlider-track": {
                        backgroundColor: "#9747FF",
                        height: 6, // Adjusted track height
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#9747FF",
                        width: 16, // Adjusted thumb width
                        height: 16, // Adjusted thumb height
                      },
                      "& .MuiSlider-markActive": {
                        backgroundColor: "#9747FF",
                      },
                    }}
                  />
                </div>
                {/* Confirm Button */}
                <Button
                  variant="contained"
                  onClick={handleConfirmPurchase}
                  style={{
                    marginTop: "20px",
                    backgroundColor: "#9747FF",
                    borderRadius: "8px",
                  }}
                >
                  Confirm auto-purchase
                </Button>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AutoTopUp;
