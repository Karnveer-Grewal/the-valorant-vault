const AgentVoicelines = ({ voiceline }) => {
  const voicelineList = voiceline.mediaList.map((media, index) => (
    <li>
      <a href={media.wave}>Download Voiceline {index + 1}</a>
    </li>
  ));
  return <div>{voicelineList}</div>;
};

export default AgentVoicelines;
