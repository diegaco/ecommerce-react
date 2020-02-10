import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../CollectionPreview/CollectionPreview.component';

const Collections = ({collections}) => (
  <div className="collections-overview">
    {
      collections.map(({id, ...props}) => (
        <CollectionPreview key={id} {...props} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(Collections);