import React from 'react';

const NewPlaylist = function (props) {
  return (
    <div className="well">
      <form onSubmit={props.handleSubmit} className="form-horizontal">
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10" onChange={props.handleChange}>
              <input className="form-control" type="text" value={props.value} />
            </div>
          </div>
          {props.showLongInputWarning ? <div className="alert alert-warning">That name is too long!</div> : null}
          {props.showShortInputWarning ? <div className="alert alert-warning">That name is too short!</div> : null}
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button disabled={props.disabled} type="submit" className="btn btn-success">Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

module.exports = NewPlaylist;
