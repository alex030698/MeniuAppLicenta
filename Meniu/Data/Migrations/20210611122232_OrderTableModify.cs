using Microsoft.EntityFrameworkCore.Migrations;

namespace Meniu.Data.Migrations
{
    public partial class OrderTableModify : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Food_preparationid",
                table: "Order");

            migrationBuilder.DropIndex(
                name: "IX_Order_preparationid",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "preparationid",
                table: "Order");

            migrationBuilder.AddColumn<int>(
                name: "table",
                table: "Order",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "table",
                table: "Order");

            migrationBuilder.AddColumn<int>(
                name: "preparationid",
                table: "Order",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Order_preparationid",
                table: "Order",
                column: "preparationid");

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Food_preparationid",
                table: "Order",
                column: "preparationid",
                principalTable: "Food",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
