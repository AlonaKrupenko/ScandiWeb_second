import { connect } from 'react-redux';

import {
    mapStateToProps as sourceMapStateToProps,
    mapDispatchToProps,
    CheckoutContainer,
} from 'SourceRoute/Checkout/Checkout.container';

export {
    mapDispatchToProps,
    CheckoutContainer,
};

export const mapStateToProps = state => ({
    ...sourceMapStateToProps(state),
    // TODO extend mapStateToProps
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
