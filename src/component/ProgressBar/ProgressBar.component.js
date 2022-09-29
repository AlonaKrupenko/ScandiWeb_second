import { PureComponent } from "react";
import "./ProgressBar.style";

export class ProgressBar extends PureComponent {
  render() {
    const currentStepIndex = this.props.steps.findIndex((step) => {
      return step.key === this.props.currentStep;
    });

    return (
      <div block="ProgressBar" className="progress-bar">
        {this.props.steps.map((step, index) => {
          const circleContent =
            index < currentStepIndex ? (
              <div className="check-icon" />
            ) : (
              index + 1
            );
          const isActive = index <= currentStepIndex;

          return (
            <>
              <div className={isActive ? "bar done" : "bar"}></div>
              {index < this.props.steps.length - 1 ? (
                <div className="step-wrapper">
                  <div className={isActive ? "circle done" : "circle"}>
                    {circleContent}
                  </div>
                  <div className={isActive ? "step-title done" : "step-title"}>
                    {step.title}
                  </div>
                </div>
              ) : null}
            </>
          );
        })}
      </div>
    );
  }
}

export default ProgressBar;
