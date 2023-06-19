import Button from "../../components/button/Button";
import screens from "../../multimedia/description-1-app.png"
import calendar from "../../multimedia/description-2-app.png"
import "./description.css"
import scheduleIcon from "../../multimedia/icon-schedule.png";
import trackingIcon from "../../multimedia/icon-tracking.png";
import organizeIcon from "../../multimedia/icon-organize.png";



export default function Description() {
    return (
      <section className="description-container">
        <article className="description-organize-container">
          <img src={screens} className="description-organize-image" />
          <div className="descriptiom-organize-text">
            <h3>Organize Your Time And Start Getting Results</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae neque, adipisci asperiores impedit alias quam inventore
              molestias doloremque. Dolore similique nostrum earum reiciendis
              fugit, at ea unde iure accusamus impedit. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quae culpa sequi nemo, unde
              quidem, accusantium provident ab neque iure eveniet libero
              suscipit tempore maiores cupiditate debitis. Natus autem modi
              esse?
            </p>
            <Button style="btn-pink" btnName={"DOWNLOAD"} />
          </div>
        </article>
        <article className="description-schedule-container">
          <div className="description-schedule-tasks">
            <div className="descriptions-schedule-tasks-buttons">
              <Button
                style="btn-square-violet"
                btnImage={scheduleIcon}
                btnName="Schedule"
              />
              <Button
                style="btn-square-white"
                btnImage={trackingIcon}
                btnName="Tracking"
              />
              <Button
                style="btn-square-white"
                btnImage={organizeIcon}
                btnName="Organize"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              commodi quos itaque suscipit pariatur repudiandae, totam culpa
              distinctio error porro atque blanditiis recusandae mollitia ipsum
              aut facilis saepe voluptas ipsa.
            </p>
            <div className="description-schedule-tasks-privacy-buttons">
              <Button style="btn-pink" btnName="TERMS" />
              <Button style="btn-white-pink" btnName="PRIVACY" />
            </div>
          </div>
          <img src={calendar} className="description-schedule-image" />
        </article>
      </section>
    );
}