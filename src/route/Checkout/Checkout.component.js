import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import ContentWrapper from "Component/ContentWrapper";
import { Suspense } from "react";
import Loader from "Component/Loader";
import { BILLING_STEP, DETAILS_STEP, SHIPPING_STEP } from "./Checkout.config";
import "./Checkout.override.style";

import ProgressBar from "Component/ProgressBar";

export class Checkout extends SourceCheckout {
  // TODO implement logic
  render() {
    const { stepMap } = this;
    const steps = [
      { key: SHIPPING_STEP, title: stepMap[SHIPPING_STEP].title },
      { key: BILLING_STEP, title: stepMap[BILLING_STEP].title },
      { key: DETAILS_STEP, title: stepMap[DETAILS_STEP].title },
    ];

    return (
      <main block="Checkout">
        <ProgressBar steps={steps} currentStep={this.props.checkoutStep} />
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div>
            <div block="Checkout" elem="Step">
              {this.renderTitle()}
              {this.renderGuestForm()}
              {this.renderStep()}
              {this.renderLoader()}
            </div>
          </div>
          <div>
            <Suspense fallback={<Loader />}>
              {this.renderSummary()}
              {this.renderPromo()}
            </Suspense>
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default Checkout;
