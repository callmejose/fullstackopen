export const Notification = ({ alert }) => {
    if (alert === null) return null

    if (alert.type === 'error') return (
        <div className="error">
            {alert.text}
        </div>
    )

    if (alert.type === 'success') return (
        <div className="success">
            {alert.text}
        </div>
    )
}