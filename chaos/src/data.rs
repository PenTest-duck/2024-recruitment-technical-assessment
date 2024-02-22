use axum::{http::StatusCode, response::IntoResponse, Json};
use serde::{Deserialize, Serialize};

// Calculate sums and return response
pub async fn process_data(Json(request): Json<DataRequest>) -> impl IntoResponse {
    let mut string_len: usize = 0;
    let mut int_sum: i32 = 0;

    // Add to length or sum depending on the data type of each element
    for item in &request.data {
        match item {
            DataItem::String(str) => {
                string_len += str.len();
            }
            DataItem::Integer(int) => {
                int_sum += int;
            }
        }
    }

    let response = DataResponse {
        string_len: string_len,
        int_sum: int_sum,
    };

    (StatusCode::OK, Json(response))
}

// Declare enum of DataItem to deserialize each element of data as either string or integer
#[derive(Deserialize, Debug)]
#[serde(untagged)]
enum DataItem {
    String(String),
    Integer(i32),
}

#[derive(Deserialize, Debug)]
pub struct DataRequest {
    data: Vec<DataItem>,
}

#[derive(Serialize)]
pub struct DataResponse {
    string_len: usize,
    int_sum: i32,
}
